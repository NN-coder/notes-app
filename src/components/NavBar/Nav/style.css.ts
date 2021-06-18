import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../../../themes.css';

export const navCLass = style({});
globalStyle(`${navCLass} ul, ${navCLass} li`, { listStyle: 'none', display: 'contents' });

export const navLinkClass = {
  base: style({
    fontSize: '1.5rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 25px',
    marginRight: '10px',
    borderTopRightRadius: '22px',
    borderBottomRightRadius: '22px',
    transition: 'background-color 0.1s',
  }),
  active: style({
    backgroundColor: themeVars.activeNavLinkBg,
  }),
};

globalStyle(`${navLinkClass.base} svg`, {
  width: '26px',
  height: '26px',
  marginRight: '10px',
  color: themeVars.controls,
  transition: 'color 0.1s',
});

globalStyle(`${navLinkClass.active} svg`, {
  color: themeVars.textColor,
});
