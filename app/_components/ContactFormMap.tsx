export default function ContactFormMap() {
  return (
    <div className='bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start h-full w-full'>
      <iframe
        width={'100%'}
        height={'100%'}
        className='absolute inset-0 w-full h-full rounded-lg'
        frameBorder='0'
        title='contact-form-map'
        marginHeight={0}
        marginWidth={0}
        scrolling='no'
        src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=chennai+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'></iframe>
    </div>
  );
}
