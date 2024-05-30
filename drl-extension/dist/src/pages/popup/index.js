import { j as jsxRuntimeExports, r as reactExports, a as addHmrIntoView } from "../../../assets/js/_virtual_reload-on-update-in-view.js";
import { c as createRoot } from "../../../assets/js/client.js";
import { u as ut } from "../../../assets/js/styled-components.browser.esm.js";
import { w as withErrorBoundary, a as withSuspense } from "../../../assets/js/withErrorBoundary.js";
import "../../../assets/js/_commonjsHelpers.js";
const LabelContent = ut.div`
  &.title {
    padding: 0rem 0.5rem;
  }
`;
const TitleLabel = ({ children, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LabelContent, { className, children });
};
const DeclarationSelect = ({ value, handleSelectChange, options }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectWrapper, { className: "B1", value, onChange: handleSelectChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", selected: true, disabled: true, hidden: true, children: "--- 선택 ---" }),
    options.map((item) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.value, children: item.description });
    })
  ] });
};
const SelectWrapper = ut.select`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f7f8fa;
`;
const DeclarationInput = ({ value, handleInputChange, placeholder }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputPadding, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder, onChange: handleInputChange, value, className: "B1" }) });
};
const InputPadding = ut.div`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  background-color: #f7f8fa;
  flex-grow: 1;
`;
const Input = ut.input``;
const DeclarationButton = ({ label, isAble, onClick }) => {
  return isAble ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputButton, { className: "B1", onClick, children: label }) : /* @__PURE__ */ jsxRuntimeExports.jsx(InputButtonDisable, { className: "B1", children: label });
};
const InputButton = ut.div`
  width: 6rem;
  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background-color: #3c96e9;

  border-radius: 0.5rem;

  cursor: pointer;
`;
const InputButtonDisable = ut.div`
  width: 6rem;
  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #292929;
  background-color: #f7f8fa;

  border-radius: 0.5rem;
`;
const declarationOptions = [
  { value: "popup", description: "불필요한 팝업창이 많이 떠요." },
  { value: "other", description: "특정 다른 사이트로 유도돼요." },
  { value: "contents", description: "불건전한 컨텐츠가 담겨있어요." }
];
const declarationReasonToOption = (reason) => {
  switch (reason) {
    case "popup":
      return "불필요한 팝업창이 많이 떠요.";
    case "other":
      return "특정 다른 사이트로 유도돼요.";
    case "contents":
      return "불건전한 컨텐츠가 담겨있어요.";
    default:
      return "error";
  }
};
const DeclarationForm = () => {
  const [submittedReason, setSubmittedReason] = reactExports.useState("");
  const handlesubmittedReasonChange = (event) => {
    setSubmittedReason(event.target.value);
  };
  const [submittedURL, setSubmittedURL] = reactExports.useState("");
  const handleSubmittedURLChange = (event) => {
    setSubmittedURL(event.target.value);
  };
  const [isAble, setIsAble] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (submittedReason == "" || submittedURL == "") {
      setIsAble(false);
    } else {
      setIsAble(true);
    }
  });
  const handleSubmit = () => {
    if (submittedReason && submittedURL) {
      alert(`신고 사유: ${declarationReasonToOption(submittedReason)}, URL: ${submittedURL}
신고되었습니다.`);
      setSubmittedReason("");
      setSubmittedURL("");
    } else {
      alert("모든 필드를 입력해 주세요.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(InputFromWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeclarationSelect,
      {
        value: submittedReason,
        handleSelectChange: handlesubmittedReasonChange,
        options: declarationOptions
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(InputWrapper, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DeclarationInput,
        {
          value: submittedURL,
          handleInputChange: handleSubmittedURLChange,
          placeholder: "악성 URL을 신고해주세요."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DeclarationButton, { label: "신고", isAble, onClick: handleSubmit })
    ] })
  ] });
};
const InputFromWrapper = ut.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const InputWrapper = ut.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
`;
const Popup = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PopupWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TitleLabel, { className: "H6 title", children: "악성 URL 신고" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeclarationForm, {})
  ] });
};
const Popup$1 = withErrorBoundary(withSuspense(Popup, /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Loading ... " })), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Error Occur " }));
const PopupWrapper = ut.div`
  width: 480px;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid #3c96e9; */
`;
addHmrIntoView("pages/popup");
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Popup$1, {}));
}
init();
