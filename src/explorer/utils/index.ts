// @ts-ignore
import doc from 'docs';
import { PreviewPropsType } from 'explorer-components';

export interface ComponentDoc {
  title: string;
  description?: string;
  props?: PreviewPropsType[];
}

export const getComponentDoc = (componentName: string): ComponentDoc | undefined => {
  const docComponents = doc.children;
  const props: PreviewPropsType[] = [];
  let component;

  for (let i = 0; i < docComponents.length; i++) {
    component = docComponents[i].children.find(({ name }: { name: string; }) => name === componentName);
    if (component) {
      break;
    }
  }

  if (!component) {
    return;
  }

  component.signatures?.[0].parameters[0].type.declaration.children.forEach(({ name, type, defaultValue }: { name: string; type: any; defaultValue: any }) => {
    if (name === 'children') {
      props.push({ name, type: name });
    } else if (name === 'props') {
      return;
    } else if (type.type === 'union') {
      props.push({
        name,
        type: type.types.map(({ type, value }: { type: string; value: string; }) =>
          `${type === 'stringLiteral' ? '"' : ''}${value}${type === 'stringLiteral' ? '"' : ''}`
        ).join(' | '),
        optional: !!defaultValue,
        defaultValue
      });
    } else {
      props.push({
        name,
        type: type.name,
        optional: !!defaultValue,
        defaultValue
      });
    }
  });

  const description = component.comment.shortText;

  return {
    title: component.name,
    description,
    props
  }
};
