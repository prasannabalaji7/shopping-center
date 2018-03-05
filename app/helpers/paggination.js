import { helper } from '@ember/component/helper';

export function paggination(params/*, hash*/) {
  return parseInt(params)+1;
}

export default helper(paggination);
