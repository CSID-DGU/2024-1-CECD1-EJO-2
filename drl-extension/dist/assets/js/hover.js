import { j as jsxRuntimeExports, r as reactExports, a as addHmrIntoView, R as ReactDOM } from "./_virtual_reload-on-update-in-view.js";
import { u as ut } from "./styled-components.browser.esm.js";
import "./_commonjsHelpers.js";
const getSearchResult = (url) => {
  switch (url) {
    case "http://dangerous.site/":
      return {
        type: "dangerous",
        description: `분석결과 ${url} 사이트는 악성 사이트로 판별됩니다. 암호화가 되지 않은 사이트는 보안에 문제가 있을 수 있습니다.`
      };
    default:
      return {
        type: "not_dnagerous",
        description: url
      };
  }
};
const icon_dangerouse = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.2248%2018.825L5.1748%2017.775L10.9498%2012L5.1748%206.225L6.2248%205.175L11.9998%2010.95L17.7748%205.175L18.8248%206.225L13.0498%2012L18.8248%2017.775L17.7748%2018.825L11.9998%2013.05L6.2248%2018.825Z'%20fill='%23F64258'/%3e%3c/svg%3e";
const icon_not_dangerouse = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.4127%2011.6625L5.0002%2013.075L9.32519%2017.4L19.3252%207.4L17.9002%206L9.32519%2014.575L6.4127%2011.6625Z'%20fill='%233ECE1A'/%3e%3c/svg%3e";
const PopupResult = (result) => {
  return result.type == "dangerous" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultTitle, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: icon_dangerouse, alt: "Dangerous site" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResultLabel, { className: "B1 dangerous", children: "의심되는 사이트입니다." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionLabel, { className: "B1", children: result.description })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(ResultTitle, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: icon_not_dangerouse, alt: "Safe site" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultLabel, { className: "B1 not_dangerous", children: "안전한 사이트입니다." })
  ] });
};
const ResultWrapper = ut.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ResultTitle = ut.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .img {
    width: 24px;
    height: 24px;
  }
  .dangerous {
    color: #f64258;
  }
  .not_dangerous {
    color: #3ece1a;
  }

  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;
const ResultLabel = ut.div`
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;
const DescriptionLabel = ut.div`
  width: 100%;
  word-wrap: break-word;
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;
const HoverModal = () => {
  const [isSearched, setIsSearched] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [url, setUrl] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (url != "") {
      setIsSearched(true);
      setResult(getSearchResult(url));
      console.log("currentURL--", url);
      setModalStyle({
        display: "flex",
        left: `${clientX}px`,
        top: `${clientY}px`,
        zIndex: `999999`
      });
    }
  }, [url]);
  const [clientX, setX] = reactExports.useState(0);
  const [clientY, setY] = reactExports.useState(0);
  const [modalStyle, setModalStyle] = reactExports.useState({ display: "none", left: "0px", top: "0px", zIndex: "99999" });
  reactExports.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    });
  });
  reactExports.useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((linkElement) => {
      linkElement.addEventListener("mouseover", () => {
        setUrl(linkElement.href);
      });
      linkElement.addEventListener("mouseleave", () => {
        console.log("mouseLeave");
        timeoutId = setTimeout(() => {
          setModalStyle((prevStyle) => ({
            ...prevStyle,
            display: "none"
          }));
          setUrl("");
        }, 1e3);
        setUrl("");
      });
    });
    return () => {
      links.forEach((linkElement) => {
        linkElement.removeEventListener("mouseover", () => {
        });
        linkElement.removeEventListener("mouseleave", () => {
        });
      });
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modalStyle, position: "fixed" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalWrapper, { children: PopupResult(getSearchResult(url)) }) }) });
};
const ModalWrapper = ut.div`
  width: 320px;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid gray;
  background-color: white;
  border-radius: 8px;
  color: black;
`;
addHmrIntoView("pages/content/injected/mouseover");
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HoverModal, {});
};
const modalRoot = document.createElement("div");
document.body.appendChild(modalRoot);
ReactDOM.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}), modalRoot);
