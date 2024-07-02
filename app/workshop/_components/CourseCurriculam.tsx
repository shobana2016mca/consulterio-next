import { curriculums } from '@/app/_constants';
import { BsStars } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi2';

export default function CourseCurriculam() {
  return (
    <div className={'grid gap-y-4'}>
      <h3 className={'text-2xl font-bold text-stone-800'}>Course Curriculum</h3>
      <ul className={'grid gap-y-4'}>
        {curriculums.map((curriculum) => (
          <li key={curriculum.title}>
            <h4
              className={
                'text-base font-bold text-stone-800 inline-flex items-center gap-2'
              }>
              <span>
                <BsStars className={'fill-yellow'} />
              </span>
              <span>{curriculum.title}</span>
            </h4>
            <ul className={'p-2 grid gap-y-2'}>
              {curriculum.description.map((description) => (
                <li
                  key={description}
                  className={
                    'text-stone-700 bg-stone-50 flex items-center gap-2 p-2 rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer'
                  }>
                  <span className={'inline-block'}>
                    <HiCheckCircle className={'fill-blue-800'} />
                  </span>
                  <span
                    className={'text-xs md:text-sm inline-block font-normal'}>
                    {description}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
