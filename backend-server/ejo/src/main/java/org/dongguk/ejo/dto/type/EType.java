package org.dongguk.ejo.dto.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EType {

    PHISHING(0, "Phishing"),
    MALWARE(1, "Malware"),
    DEFACEMENT(2, "Defacement"),
    BENIGN(3, "Benign");

    private final Integer code;
    private final String name;

//    public static EType of(Integer code) {
//        for (EType type : values()) {
//            if (type.code.equals(code)) {
//                return type;
//            }
//        }
//        throw new IllegalArgumentException("Invalid code: " + code);
//    }

    public static EType of(String name) {
        for (EType type : values()) {
            if (type.name.equals(name)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Invalid name: " + name);
    }


}
