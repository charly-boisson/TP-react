import React from "react";
import Loading from '../../sub-components/Loading';

const withLoading = (Component) =>
  ({ isLoading, ...props }) => {
    return isLoading? <Loading />: <Component { ...props } />
}
export default withLoading;
