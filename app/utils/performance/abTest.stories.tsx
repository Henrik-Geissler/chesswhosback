import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Button } from 'react-native'
import { Obj } from '../../models/geometry/Obj'
import { abTest } from './abTest'

storiesOf('AB Performance', module).add('Obj', () => (
  <>
    check console
    <Button
      title='getName'
      onPress={() =>
        abTest(
          () => new Obj().getName(),
          () => Obj.getName(new Obj())
        )
      }
    ></Button>
    <Button
      title='ObjectEqulas'
      onPress={() =>
        abTest(
          () => new Obj().equ(new Obj()),
          () => Obj.equals(new Obj(), new Obj())
        )
      }
    ></Button>
  </>
))
