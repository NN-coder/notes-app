import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdErrorOutline, MdSearch } from 'react-icons/md';
import { containerClass, iconClass, loadingIconClass } from './style.css';

export const loadingPlaceholder = (
  <div className={containerClass}>
    <AiOutlineLoading3Quarters className={loadingIconClass} />
    Loading...
  </div>
);

export const errorPlaceholder = (
  <div className={containerClass}>
    <MdErrorOutline className={iconClass} />
    Something went wrong!
  </div>
);

export const emptyPlaceholder = (
  <div className={containerClass}>
    <MdSearch className={iconClass} />
    Nothing was found.
  </div>
);
