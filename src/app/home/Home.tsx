'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from 'react-redux';
import Image from 'next/image';
import { formatTenThousand } from '@/utils/utils';
import styles from './home.module.scss';

type Props = {
  list: ItemType[];
};

type ItemType = {
  aid: number;
  pic: string;
  title: string;
  stat: {
    view: number;
    danmaku: number;
  };
};

function Home(props: Props): React.ReactElement {
  const router = useRouter();
  const store = useStore();

  const jumpVideoDetail = (item: ItemType): void => {
    router.push(`/video-detail?aid=${item.aid}`);

    store.dispatch({
      type: 'routine/setViewHistory',
      payload: {
        aid: item.aid,
        pic: item.pic,
        title: item.title,
        createTime: new Date().getTime()
      }
    });
  };

  const RenderItem = ({ item }: { item: ItemType }) => {
    return (
      <li className={styles.item} onClick={() => jumpVideoDetail(item)}>
        <div className={styles.itemCover}>
          <Image
            className={styles.itemImage}
            src={item.pic}
            fill
            sizes="50%"
            priority
            alt=""
          />
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <i className={`icon-play-count ${styles.itemIcon}`}></i>
              <span className={styles.itemText}>
                {formatTenThousand(item.stat?.view)}
              </span>
            </div>
            <div className={styles.infoItem}>
              <i className={`icon-barrage-count ${styles.itemIcon}`}></i>
              <span className={styles.itemText}>
                {formatTenThousand(item.stat?.danmaku)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.itemTitle}>{item.title}</div>
      </li>
    );
  };

  return (
    <ul className={styles.list}>
      {props.list?.map?.((item, index) => {
        return <RenderItem key={index} item={item} />;
      })}
    </ul>
  );
}

export default Home;
