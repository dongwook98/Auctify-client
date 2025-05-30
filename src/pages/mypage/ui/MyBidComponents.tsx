import Image from 'next/image';
import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui/Card';
import { Separator } from '@/shared/ui/separator';
import { AuctionCard } from '@/entities/auctions';
interface AuctionItemType {
  id: string;
  title: string;
  startPrice: string;
  currentPrice: string;
  endDate: string;
  image: string;
  status: 'active' | 'ended' | 'sold' | 'draft';
  bids: number;
}

export function MyBidComponents({ auction }: { auction: AuctionItemType }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'all':
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            전체
          </span>
        );
      case 'active':
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
            진행중
          </span>
        );
      case 'pending':
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            결제 대기
          </span>
        );
      case 'sold':
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            판매 완료
          </span>
        );
      case 'ended':
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            종료됨
          </span>
        );

      default:
        return null;
    }
  };
  return (
    <Card key={auction.id} className="overflow-hidden">
      <div className="relative">
        <Image
          src={auction.image || '/placeholder.svg'}
          alt={auction.title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
        <div className="absolute right-2 top-2">
          {getStatusBadge(auction.status)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-medium">{auction.title}</h3>
        <div className="mt-2 flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">시작가</p>
            <p>{auction.startPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">현재가</p>
            <p className="font-bold text-blue-700">{auction.currentPrice}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">마감일</p>
            <p>{auction.endDate}</p>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-end p-4">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
