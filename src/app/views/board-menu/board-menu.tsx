import { useAppSelector } from '@/store';

export const BoardMenu = () => {
  const boardMenu = useAppSelector((state) => state.boards);

  console.log(boardMenu);
  return <div>BoardMenu</div>;
};
