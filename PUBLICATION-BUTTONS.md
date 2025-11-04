# Publication Buttons Usage Guide

This site now has styled publication buttons that match the terminal theme!

## How to Use

Add buttons below any publication using the `pub-buttons` shortcode:

```markdown
**Paper Title**  
*Authors*  
Venue/Conference 2025  
{{< pub-buttons pdf="url" code="url" talk="url" >}}
```

## Available Button Types

- `pdf="url"` - PDF button (red/pink) - for direct PDF links
- `arxiv="url"` - arXiv button (orange) - for arXiv papers
- `code="url"` - Code button (green) - for GitHub/code repositories
- `talk="url"` - Talk button (blue) - for recorded talks
- `video="url"` - Video button (blue) - for video presentations
- `slides="url"` - Slides button (purple) - for slide decks
- `website="url"` - Website button (teal) - for project pages

## Examples

### Paper with PDF and Code
```markdown
**My Amazing Paper**  
*John Abascal, et al.*  
NeurIPS 2025  
{{< pub-buttons pdf="/papers/neurips2025.pdf" code="https://github.com/username/repo" >}}
```

### Paper with all resources
```markdown
**Complete Research Project**  
*Authors*  
ICML 2025  
{{< pub-buttons arxiv="https://arxiv.org/abs/xxxx.xxxxx" pdf="/papers/icml2025.pdf" code="https://github.com/user/project" talk="https://youtube.com/watch?v=xxxxx" slides="/slides/icml2025.pdf" website="https://project-site.com" >}}
```

### arXiv preprint only
```markdown
**Preprint Paper**  
*Authors*  
arXiv preprint arXiv:2024.xxxxx, 2024  
{{< pub-buttons arxiv="https://arxiv.org/abs/2024.xxxxx" >}}
```

## Notes

- Only buttons for provided URLs will be displayed
- Buttons are styled to match the terminal theme
- PDF buttons are red (more vibrant in dark mode as requested)
- Colors are muted in light mode, more vibrant in dark mode
- All buttons open in a new tab
- Responsive design for mobile devices
