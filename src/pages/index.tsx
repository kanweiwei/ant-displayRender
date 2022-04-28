import { Cascader } from "antd";
import styles from './index.less';

export default function IndexPage() {
  const treeData = [
    {
      title: 'Creditcrad',
      value: 1,
      key: 1,
      children: [
        {
          title: 'Visa',
          value: 11,
          key: 11,
        },
        {
          title: 'Master',
          value: 12,
          key: 12,
        },
        {
          title: 'JCB',
          value: 13,
          key: 13,
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <Cascader
        style={{ width: 257 }}
        multiple
        options={treeData}
        fieldNames={{ label: 'title', value: 'value', children: 'children' }}
        showSearch={{
          filter: (inputValue, options) =>
            options.some((option) => {
              return (
                String(option.value).match(inputValue) ||
                String(option.title).toLowerCase().match(inputValue) ||
                String(option.title).toUpperCase().match(inputValue)
              );
            }),
        }}
        displayRender={(labels, options) => {
          let tmpStr = [];
          if (options) {
            for (let i = 0; i < options.length; i++) {
              const item = options[i];
              tmpStr.push(`${item.value}-${item.title}`);
            }
          }
          return <>{tmpStr.join('/')}</>;
        }}
      />
    </div>
  );
}
