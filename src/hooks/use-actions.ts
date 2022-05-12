import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators';

type UseActionsReturnType = typeof ActionCreators;

export const useActions = (): UseActionsReturnType => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
