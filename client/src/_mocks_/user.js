import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(54)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  dateMAJ: '22 Mar 2021',
  role: sample([
    '2500 FC',
    '5450 FC',
    '1000 FC',
    '3200 FC',
    '1500 FC',
    '5450 FC',
    '1000 FC',
    '3200 FC',
    '1500 FC'
  ])
}));

export default users;
