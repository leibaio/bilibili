import React from 'react';
import { searchDefault, searchHot } from '@/api/search';
import type { ResponseType } from '@/types/index';
import Search from './Search';

const props = {
  default: {},
  hot: []
};

const getSearchDefault = async (): Promise<void> => {
  const { code, data }: ResponseType = await searchDefault();
  if (code !== 0) {
    return;
  }

  props.default = data ?? {};
};

const getSearchHot = async (): Promise<void> => {
  const { code, list }: ResponseType = await searchHot();
  if (code !== 0) {
    return;
  }

  props.hot = list?.slice?.(0, 3) ?? [];
};

async function Page(): Promise<React.ReactElement> {
  await getSearchDefault();
  await getSearchHot();

  return <Search {...props} />;
}

export default Page;
