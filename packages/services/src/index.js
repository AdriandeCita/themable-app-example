import ThemeProviderService, { ThemeServiceContext } from './theme/service';
import EditorContext, { EditorContextProvider } from './editor/context';
import withEditor from './editor/withEditor';

import Text from './editor/components/text';
import Select from './editor/components/select';

export default ThemeProviderService;

export {
	ThemeProviderService,
	ThemeServiceContext,
	withEditor,
	EditorContext,
	EditorContextProvider,
	Text,
	Select,
};
