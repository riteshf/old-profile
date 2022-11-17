import React from 'react';
import { skeleton } from '../../helpers/utils';

const Skeleton = () => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="flex justify-between flex-col p-8 h-full w-full">
        <div>
          <div className="flex items-center">
            <span>
              <h5 className="card-title text-lg">
                {skeleton({ width: 'w-32', height: 'h-8' })}
              </h5>
            </span>
          </div>
          <div className="mb-5 mt-1">
            {skeleton({
              width: 'w-full',
              height: 'h-4',
              className: 'mb-2',
            })}
            {skeleton({ width: 'w-full', height: 'h-4' })}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              {skeleton({ width: 'w-12', height: 'h-4' })}
            </span>
            <span className="flex items-center">
              {skeleton({ width: 'w-12', height: 'h-4' })}
            </span>
          </div>
          <div>
            <span className="flex items-center">
              {skeleton({ width: 'w-12', height: 'h-4' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
