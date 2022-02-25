import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {RootStackNavigationProp} from '../screens/types';
import {register} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../api/client';
import authStorage from '../storages/authStorage';
import useInform from './useInform';

export default function useRegister() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();
  const inform = useInform();

  const mutation = useMutation(register, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      const message =
        error.response?.data.data[0].messages[0].message ?? '회원가입 실패';

      inform({
        title: '오류',
        message,
      });
    },
  });

  return mutation;
}
