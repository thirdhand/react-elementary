/** @module react-elementary/lib/propsMapper */

import { assoc, has, lens, omit, over, pipe, prop, when } from 'ramda'

export type PropsMapper = (props: object) => object

/**
 * Default props mapper, mapping the custom innerHtml prop to the React prop
 * dangerouslySetInnerHtml.
 * @function
 * @param    {object} props - the props to be mapped
 * @return   {object}         the mapped props object
 */
export const propsMapper = when(
  has('innerHtml'),
  over(
    lens(
      prop('innerHtml'),
      pipe(assoc('dangerouslySetInnerHTML'), omit(['innerHtml'])),
    ),
    (value: string) => ({ __html: value }),
  ),
)
