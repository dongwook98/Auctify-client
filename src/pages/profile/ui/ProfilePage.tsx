'use client';

import type React from 'react';
import { useState } from 'react';
import {
  User,
  Heart,
  Gavel,
  BarChart4,
  ThermometerSun,
  Bell,
  MapPinHouse,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

import { ProfileSection } from './ProfileSection';
import { WishListSection } from './WishListSection';
import { ShippingAddressSection } from './ShippingAddressSection';
import { TemperatureSection } from './TemperatureSection';
import { NotificationSection } from './NotificationSection';
import { MyHistorySection } from './MyHistorySection';
import { BidHistorySection } from './BidHistorySection';
type NavItem = {
  title: string;
  icon: React.ReactNode;
  section: string;
};

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<string>('profile');

  const navItems: NavItem[] = [
    {
      title: '프로필',
      icon: <User className="h-5 w-5" />,
      section: 'profile',
    },
    {
      title: '찜목록',
      icon: <Heart className="h-5 w-5" />,
      section: 'wishlist',
    },
    {
      title: '입찰/낙찰 내역',
      icon: <Gavel className="h-5 w-5" />,
      section: 'bidHistory',
    },
    {
      title: '내 경매 내역',
      icon: <BarChart4 className="h-5 w-5" />,
      section: 'myHistory',
    },
    {
      title: '배송 주소 관리',
      icon: <MapPinHouse className="h-5 w-5" />,
      section: 'shippingAddress',
    },
    {
      title: '온도 및 리뷰',
      icon: <ThermometerSun className="h-5 w-5" />,
      section: 'temperature',
    },
    {
      title: '알림 내역',
      icon: <Bell className="h-5 w-5" />,
      section: 'notifications',
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'wishlist':
        return <WishListSection />;
      case 'bidHistory':
        return <BidHistorySection />;
      case 'myHistory':
        return <MyHistorySection />;
      case 'shippingAddress':
        return <ShippingAddressSection />;
      case 'temperature':
        return <TemperatureSection />;
      case 'notifications':
        return <NotificationSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <div className="fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg md:relative">
        <div className="flex h-20 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-blue-700">마이페이지</h1>
        </div>
        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              className={cn(
                'flex w-full items-center justify-start gap-3 px-4 py-6 text-left text-sm font-medium',
                activeSection === item.section
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700',
              )}
              onClick={() => setActiveSection(item.section)}
            >
              {item.icon}
              {item.title}
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-4 md:p-8">
        <Card className="min-h-[calc(100vh-4rem)] p-6">{renderSection()}</Card>
      </div>
    </div>
  );
}
