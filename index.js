import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkLintNoTabs from 'remark-lint-no-tabs';
import remarkLintFinalDefinition from 'remark-lint-final-definition';
import remarkValidateLinks from 'remark-validate-links';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value';
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkGithubFlavoredMarkdown from 'remark-gfm';
import remarkLintNoUnusedDefinitions from 'remark-lint-no-unused-definitions';
import remarkLintNoShellDollars from 'remark-lint-no-shell-dollars';
import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker';
import remarkLintStrongMarker from 'remark-lint-strong-marker';
import remarkLintFencedCodeMarker from 'remark-lint-fenced-code-marker';
import remarkLintHeadingStyle from 'remark-lint-heading-style';
import remarkLintNoShortcutReferenceLink from 'remark-lint-no-shortcut-reference-link';

export default {
  plugins: [
    remarkGithubFlavoredMarkdown,
    remarkPresetLintRecommended,
    [remarkLintMaximumLineLength, 120],
    remarkLintNoTabs,

    [remarkLintHeadingStyle, 'atx'],

    [remarkLintEmphasisMarker, '_'],
    [remarkLintStrongMarker, '*'],
    [remarkLintFencedCodeMarker, '`'],

    [remarkLintListItemIndent, 'one'],
    [remarkLintUnorderedListMarkerStyle, '-'],
    [remarkLintOrderedListMarkerValue, 'ordered'],

    remarkLintNoShellDollars,

    remarkLintNoUnusedDefinitions,
    remarkLintFinalDefinition,
    remarkValidateLinks,
    remarkLintNoEmptyUrl,
    [remarkLintNoShortcutReferenceLink, false],
  ]
};
