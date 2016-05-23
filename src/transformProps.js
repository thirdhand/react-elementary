import { assoc, lens, omit, over, pipe, prop } from 'ramda';

export default function transformProps(props) {
  const innerHtmlLens = lens(
    prop('innerHtml'),
    pipe(assoc('dangerouslySetInnerHtml'), omit('innerHtml'))
  );
  return over(innerHtmlLens, value => ({ __html: value }), props);
}
