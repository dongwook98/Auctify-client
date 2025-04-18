'use client';

import KakaoIcon from '@icons/kakao.svg';

import { Button } from '@/shared/ui';

export default function KakaoLoginButton() {
  const handleKaKaoLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;
  };

  return (
    <Button variant="outline" onClick={handleKaKaoLogin} size="full">
      <KakaoIcon className="w-6 h-6" />
      카카오 로그인
    </Button>
  );
}
