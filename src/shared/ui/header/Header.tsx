import React from 'react';
import AutifyLogo from '@icons/auctifyLogo32x32.svg';
// import PersonIcon from '@icons/person.svg';

import { Search } from './Search';

export function Header() {
  return (
    <header className="flex">
      <div>
        <AutifyLogo width={32} height={32} />
      </div>
      <div>
        <Search />
      </div>
      <button>로그인</button>
    </header>
  );
}
