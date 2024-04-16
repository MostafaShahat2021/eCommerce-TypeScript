import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByCategoryPrefix,
  productsCleanup,
} from '@store/products/productsSlice';
import { Container } from 'react-bootstrap';
import { GridList } from '@components/common';
import { Product } from '@components/eCommerce';
import { Loading } from '@components/feedback';

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCategoryPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
