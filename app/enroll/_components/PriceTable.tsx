export default function PriceTable() {
  return (
    <div className={'w-full'}>
      <div className='overflow-x-clip bg-white w-full'>
        {/* <!-- Table --> */}
        <table className='min-w-full whitespace-nowrap text-left text-xs'>
          {/* <!-- Table head --> */}
          <thead className='border-b-2 bg-blue-50 uppercase tracking-wider'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
            </tr>
          </thead>

          {/* <!-- Table body --> */}
          <tbody>
            <tr className='border-b hover:bg-blue-100'>
              <th scope='row' className='px-6 py-3'>
                Interview Mastery Workshop x 1
              </th>
              <td className='px-6 py-3'>&#8377; 999.00</td>
            </tr>

            {/* <tr className='border-b bg-blue-50 hover:bg-blue-100'>
              <th scope='row' className='px-6 py-3'>
                GST (18%) (incl.)
              </th>
              <td className='px-6 py-3'>&#8377; 76.12</td>
            </tr> */}
          </tbody>

          {/* <!-- Table footer --> */}
          <tfoot className='border-t-2'>
            <tr>
              <th className='px-6 py-3'>Total:</th>
              <td className='px-6 py-3'>&#8377; 999.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
