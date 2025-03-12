import { Filter } from 'lucide-react';

import { Button } from '@/shared/ui';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/Sheet';

// import FilterSection from './FilterSection';

export default function HeaderSection({ length }: { length: number }) {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold">경매 목록</h1>
        <p className="text-muted-foreground mt-1">
          총 {length}개의 경매가 진행 중입니다
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              필터
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetDescription>
                <SheetTitle>필터</SheetTitle>
                원하는 조건으로 경매 아이템을 필터링하세요.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              {/* TODO filter 상태관리 라이브러리 도입 후 추가 */}
              {/* <FilterSection /> */}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" size="sm">
                필터 초기화
              </Button>
              <SheetClose asChild>
                <Button size="sm">적용하기</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
