import devConfigs from '@configs/dev.env';
import prodConfigs from '@configs/prod.env';
import { Configs } from './type';

const prod = process.env.NODE_ENV === 'production';

const configs: Configs = prod ? prodConfigs : devConfigs;

export default configs;
