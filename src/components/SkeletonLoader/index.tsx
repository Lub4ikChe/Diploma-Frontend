import React from 'react';

import { StyledSkeleton } from './styles';
import { SkeletonLoaderProps } from './types';

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ isLoading }) => {
  return isLoading ? <StyledSkeleton variant="rectangular" width="100%" height="100vh" /> : null;
};

export default SkeletonLoader;
