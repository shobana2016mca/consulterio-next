'use client';

import { classNames } from '@/lib/utils';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState } from 'react';

type SelectedTabType = 'home' | 'profile' | 'message';

export default function EnrollmentForm() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const [selected, setSelected] = useState<SelectedTabType>('home');

  function handleSelectedTab(tabType: SelectedTabType) {
    setSelected(tabType);
  }

  return (
    <>
      <div className='w-full max-w-md px-2 py-16 sm:px-0'>
        <TabGroup>
          <TabList className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }>
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className='mt-2'>
            {Object.values(categories).map((posts, idx) => (
              <TabPanel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}>
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className='relative rounded-md p-3 hover:bg-gray-100'>
                      <h3 className='text-sm font-medium leading-5'>
                        {post.title}
                      </h3>

                      <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href='#'
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}>
                        <span className='sr-only'>Read article</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>

      <ul className='grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1'>
        {' '}
        <li>
          {' '}
          <a href='#page1' className='flex justify-center py-4'>
            Pilot Training
          </a>{' '}
        </li>{' '}
        <li>
          {' '}
          <a
            href='#page2'
            className='flex justify-center bg-white rounded-lg shadow text-indigo-600 py-4'>
            Titan maintenance
          </a>{' '}
        </li>{' '}
        <li>
          {' '}
          <a href='#page3' className='flex justify-center py-4'>
            Loadout
          </a>{' '}
        </li>{' '}
        <li>
          {' '}
          <a href='#page4' className='flex justify-center py-4'>
            Server Browser
          </a>{' '}
        </li>{' '}
        <li>
          {' '}
          <a href='#page5' className='flex justify-center py-4'>
            Settings
          </a>{' '}
        </li>{' '}
      </ul>

      <div>
        <div className='grid grid-cols-3 gap-5'>
          <button
            // className='p-4 rounded shadow-md text-white bg-indigo-500'
            className={classNames(
              selected === 'home'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('home')}>
            Home
          </button>
          <button
            className={classNames(
              selected === 'profile'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('profile')}>
            Profile
          </button>
          <button
            className={classNames(
              selected === 'message'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('message')}>
            Messages
          </button>
        </div>
        {selected === 'home' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}

        {selected === 'profile' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}

        {selected === 'message' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}
      </div>
    </>
  );
}
