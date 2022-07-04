import SegmentedControl, {
  SegmentedControlProps,
} from '@react-native-segmented-control/segmented-control'
import { localization } from 'localization'
import React from 'react'
import { ControllerProps } from 'react-hook-form'
import { StyledInput } from 'src/components/StyledInput'

import { ConfigureGameForm } from './types'

export const renderSegmentedControl: <T extends keyof ConfigureGameForm>(
  values: SegmentedControlProps['values'],
  tintColor: SegmentedControlProps['tintColor'],
) => ControllerProps<ConfigureGameForm, T>['render'] =
  (values, tintColor) =>
  ({ field: { onChange, value } }) =>
    (
      <SegmentedControl
        values={values}
        backgroundColor={'rgba(0, 184, 147, 0.8)'}
        tintColor={tintColor}
        selectedIndex={value as number}
        onChange={event => onChange(event.nativeEvent.selectedSegmentIndex)}
      />
    )

export const renderInputControl: ControllerProps<
  ConfigureGameForm,
  'name'
>['render'] = ({
  field: { onChange, onBlur, value },
  formState: { errors },
}) => (
  <StyledInput
    value={value}
    label={localization('playerNameLabel')}
    onChangeText={onChange}
    onBlur={onBlur}
    autoCapitalize={'none'}
    placeholder={localization('playerNamePlaceholder')}
    helperText={localization('playerNameErrorText')}
    error={errors.name !== undefined}
  />
)
