import React from 'react';
import NewArrivalsCard from './NewArrivalsCard';

export const NewArrivals = ({ recentProducts }) => {
  return (
    <div>
      {recentProducts?.map((p) => {
        return (
          <div>
            <Link to={`/details/${p.id}`} key={p.id}>
              <NewArrivalsCard
                name={p.name}
                price={p.price}
                image_link={p.image_link}
                rating={p.rating}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
