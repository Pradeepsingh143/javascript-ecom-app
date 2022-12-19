import React from "react";
import styled from "styled-components";

export const Button = styled.button(
  ({
    color,
    opacity,
    bgColor,
    border,
    borderRadius,
    hoverColor,
    hoverBgColor,
    hoverBorder,
    size,
    width,
    height,
    fontFamily,
  }) => ({
    color: (color || '#fff'),
    opacity: (opacity || '1'),
    backgroundColor: (bgColor || '#000'),
    border: (border || ''),
    borderRadius: (borderRadius || '4px'),
    fontSize: (size || ''),
    width: (width || '100px'),
    height: (height || '40px'),
    fontFamily: (fontFamily || ''),
    "&:hover": {
      color: hoverColor,
      border: hoverBorder,
      backgroundColor: hoverBgColor,
    },
  })
);

export const Heading = styled.h1(
  ({
    fontWeight,
    fontFamily,
    fontSize,
    fontStyle,
    letterSpacing,
    lineHeight,
    lineBreak,
    color,
    opacity,
    bgColor,
    display,
    textDecoration,
  }) => ({
    fontSize: fontSize || "42px",
    fontFamily: fontFamily || "",
    fontWeight: fontWeight || 700,
    fontStyle: fontStyle || "normal",
    letterSpacing: letterSpacing || "normal",
    lineHeight: lineHeight || "normal",
    lineBreak: lineBreak || "auto",
    color: color || "",
    opacity: (opacity || '1'),
    backgroundColor: bgColor || "",
    display: display || "",
    textDecoration: textDecoration || "",
  })
);

export const SubHeading = styled.h2(
  ({
    fontWeight,
    fontFamily,
    fontSize,
    fontStyle,
    letterSpacing,
    lineHeight,
    lineBreak,
    color,
    opacity,
    bgColor,
    display,
    textDecoration,
  }) => ({
    fontSize: fontSize || "22px",
    fontFamily: fontFamily || "",
    fontWeight: fontWeight || 500,
    fontStyle: fontStyle || "normal",
    letterSpacing: letterSpacing || "normal",
    lineHeight: lineHeight || "normal",
    lineBreak: lineBreak || "auto",
    color: color || "",
    opacity: (opacity || '1'),
    backgroundColor: bgColor || "",
    display: display || "",
    textDecoration: textDecoration || "",
  })
);

export const Paragraph = styled.p(
  ({
    fontWeight,
    fontFamily,
    fontSize,
    fontStyle,
    letterSpacing,
    lineHeight,
    lineBreak,
    color,
    opacity,
    bgColor,
    display,
    textDecoration,
  }) => ({
    fontSize: fontSize || "16px",
    fontFamily: fontFamily || "",
    fontWeight: fontWeight || 400,
    fontStyle: fontStyle || "normal",
    letterSpacing: letterSpacing || "normal",
    lineHeight: lineHeight || "normal",
    lineBreak: lineBreak || "auto",
    color: color || "",
    opacity: (opacity || '1'),
    backgroundColor: bgColor || "",
    display: display || "",
    textDecoration: textDecoration || "",
  })
);
