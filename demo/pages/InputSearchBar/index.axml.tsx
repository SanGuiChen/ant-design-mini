import { View } from 'tsxml';
import AntInput from '../../../src/Input/index.axml';
import Icon from '../../../src/Icon/index.axml';

export default () => (
  <View class="container">
    <AntInput
      placeholder="请输入内容"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
      onConfirm="onConfirm"
    >
      <Icon slot="prefix" type="SearchOutline" />

      <Icon slot="suffix" type="AudioOutline" />
    </AntInput>
    <View class="cancel">取消</View>
  </View>
);
