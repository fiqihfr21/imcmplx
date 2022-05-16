import { Page2 } from './page-2';
import { Page3 } from './page-3';
import { Page1 } from './page-1';

export const Origins = () => {

  return (
    <div className="flex flex-col">
      {/* page 1 */}
      <div className='h-screen'>
        <Page1 />
      </div>

      <div className='container mx-auto'>
        {/* page 2 */}
        <div className=''>
          <Page2 />
        </div>

        {/* page 3 */}
        <div className=''>
          <Page3 />
        </div>

      </div>
    </div>
  )
}