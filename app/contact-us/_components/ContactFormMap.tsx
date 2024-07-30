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
        src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=259/1,Om Sakthi Nagar, Mettukuppam,Vanagaram,Chennai,Adayalampattu,Tamilnadu(Consultero)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
        // src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=259/1, Om Sakthi Nagar, Mettukuppam, Vanagaram, Chennai, Adayalampattu, Tamil Nadu 95+(Consultero)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
        // src="https://www.google.com/maps/place/13%C2%B00251.3%22N+80%C2%B008'60.0%22E/@13.0475954,80.1474163,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0475954!4d80.1499912?hl=en&entry=ttu"
        // ariaModal='true'
      ></iframe>
    </div>
  );
}
