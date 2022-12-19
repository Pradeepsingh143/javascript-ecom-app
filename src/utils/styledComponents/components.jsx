import React from "react";
import styled from "styled-components";

export const Button = styled.button(
  ({
    color,
    bgColor,
    border,
    borderRadius,
    hoverColor,
    hoverBgColor,
    hoverBorder,
    size,
    width,
    height,
    fontFamily
  }) => ({
    color: color,
    backgroundColor: bgColor,
    border: border,
    borderRadius: borderRadius,
    fontSize: size,
    width: width,
    height: height,
    fontFamily: fontFamily,
    "&:hover": {
      color: hoverColor,
      border: hoverBorder,
      backgroundColor: hoverBgColor,
    }
  })
);

export const Heading = styled.h1(
  ({fontWeight, fontFamily, fontSize, fontStyle, letterSpacing, lineHeight, lineBreak, color, bgColor, display})=>({
  fontSize:  (fontSize || '42px'),
  fontFamily: (fontFamily || ''),
  fontWeight: (fontWeight || 700),
  fontStyle: (fontStyle || 'normal'),
  letterSpacing:  (letterSpacing || 'normal'),
  lineHeight: (lineHeight || 'normal'),
  lineBreak: (lineBreak || 'auto'),
  color: (color || ''),
  backgroundColor: (bgColor || ''),
  display : (display || ''),
})
);

export const SubHeading = styled.h2(({fontWeight, fontFamily, fontSize, fontStyle, letterSpacing, lineHeight, lineBreak, color, bgColor, display})=>({
  fontSize: (fontSize || '22px'),
  fontFamily: (fontFamily || ''),
  fontWeight: (fontWeight || 500),
  fontStyle: (fontStyle || 'normal'),
  letterSpacing:  (letterSpacing || 'normal'),
  lineHeight: (lineHeight || 'normal'),
  lineBreak: (lineBreak || 'auto'),
  color: (color || ''),
  backgroundColor: (bgColor || ''),
  display : (display || ''),
}))


export const Paragraph = styled.p(({fontWeight, fontFamily, fontSize, fontStyle, letterSpacing, lineHeight, lineBreak, color, bgColor, display})=>({
  fontSize: (fontSize || '16px'),
  fontFamily: (fontFamily || ''),
  fontWeight: (fontWeight || 400),
  fontStyle: (fontStyle || 'normal'),
  letterSpacing:  (letterSpacing || 'normal'),
  lineHeight: (lineHeight || 'normal'),
  lineBreak: (lineBreak || 'auto'),
  color: (color || ''),
  backgroundColor: (bgColor || ''),
  display : (display || ''),
}))