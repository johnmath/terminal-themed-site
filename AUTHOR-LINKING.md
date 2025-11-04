# Author Linking System

The site now automatically links author names to their websites!

## How it Works

The `{{< authors >}}` shortcode looks up author names in `data/authors.yaml` and automatically creates links for known authors.

## Usage

```markdown
*{{< authors "John Abascal, Matthew Jagielski, Unknown Person" >}}*
```

This will render as:
- **John Abascal** → linked to https://johnabascal.com/
- **Matthew Jagielski** → linked to https://jagielski.github.io/
- **Unknown Person** → plain text (no link)

## Adding New Authors

Edit `data/authors.yaml`:

```yaml
"New Author Name": "https://their-website.com/"
```

**Important**: Match the exact name format used in your publications!

## Current Authors in Database

- John Abascal / J. Abascal
- Matthew Jagielski / M. Jagielski
- Harsh Chaudhari / H. Chaudhari
- Florian Tramèr / F. Tramèr
- Jonathan Ullman / J. Ullman
- Alina Oprea / A. Oprea

## Tips

1. Add both full names and abbreviated versions (e.g., "J. Abascal" and "John Abascal")
2. Match the exact spelling and punctuation from your papers
3. Authors not in the database will appear as plain text (no broken links)
4. All links open in a new tab automatically

## Example Publication Entry

```markdown
**Paper Title**  
*{{< authors "John Abascal, Matthew Jagielski, Other Authors" >}}*  
Conference 2025  
{{< pub-buttons pdf="url" code="url" >}}
```
