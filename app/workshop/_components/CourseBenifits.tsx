import { benifits } from '@/constants';
import { BsStars } from 'react-icons/bs';

export default function CourseBenifits() {
  return (
    <div className={'grid gap-y-4'}>
      <h3 className={'text-2xl font-bold text-stone-800'}>Course Benifits</h3>
      <ul>
        {benifits.map((benifit) => (
          <li key={benifit.title}>
            <h4
              className={
                'text-base font-bold text-stone-800 inline-flex items-center gap-2'
              }>
              <span>
                <BsStars className={'fill-yellow'} />
              </span>
              <span>{benifit.title}</span>
            </h4>
            <p className={'text-stone-700'}>{benifit.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
