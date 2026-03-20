# Git Commit Message Guide

A clear and consistent commit message style helps maintain readable project history and supports automation tools like changelogs and release notes.

---

## 1. Commit Message Format

Each commit message should follow this structure:

```
<type>(<optional scope>): <short summary>

[optional body]

[optional footer]
```

### Example:
```
feat(auth): add JWT token refresh logic

Added auto-refresh for access tokens when expired.
Improves UX by reducing forced logouts.

Closes #42
```

---

## 2. Standard Commit Types

| Type | Description | Example |
|------|--------------|----------|
| **feat:** | Introduces a new feature | `feat: add user login API` |
| **fix:** | Fixes a bug | `fix: resolve crash when saving profile` |
| **docs:** | Documentation-only changes | `docs: update README with setup instructions` |
| **style:** | Code style changes (formatting, spacing, etc.) that don't affect code logic | `style: format code using Prettier` |
| **refactor:** | Code refactoring that doesn't change behavior | `refactor: simplify user service logic` |
| **perf:** | Performance improvements | `perf: optimize image loading in gallery` |
| **test:** | Add or update tests | `test: add unit tests for login service` |
| **build:** | Changes to build system or dependencies | `build: update Node version to 18` |
| **ci:** | Continuous Integration / Continuous Deployment configuration changes | `ci: add GitHub Actions workflow for testing` |
| **chore:** | Routine maintenance or non-code changes | `chore: clean up unused imports` |
| **revert:** | Reverts a previous commit | `revert: revert feat: add user login API` |

---

## 3. Optional / Custom Commit Types

| Type | Description | Example |
|------|--------------|----------|
| **security:** | Security-related fixes | `security: patch XSS vulnerability` |
| **deps:** | Dependency updates | `deps: bump axios from 1.6.0 to 1.7.2` |
| **ui:** | Frontend UI/UX changes | `ui: improve button hover state` |
| **hotfix:** | Urgent fix for production issue | `hotfix: resolve payment API timeout` |

---

## 4. The Exclamation Mark (`!`) for Breaking Changes

The `!` symbol in a commit message indicates a **breaking change**, meaning it introduces modifications that are **not backward compatible**.

### Example:
```bash
feat(api)!: change user authentication flow
```

This tells developers (and automated tools) that the commit includes a breaking change related to the `api` scope.

Alternatively, you can use a `BREAKING CHANGE:` footer in the commit message:
```bash
feat(api): change user authentication flow

BREAKING CHANGE: The login endpoint now requires an access token instead of a password.
```

Both formats are valid and may even be combined for clarity.

### When to Use `!`
- Changing a function signature or removing a public method.
- Renaming or deleting an API endpoint or field.
- Modifying database schemas without backward compatibility.
- Removing or renaming environment variables.
- Altering existing behavior that users or systems depend on.

### Example Commits
| Commit | Meaning |
|---------|----------|
| `refactor(core)!: remove deprecated user model` | Breaking change — old user model removed |
| `feat(ui)!: drop IE11 support` | Breaking change — older browsers no longer supported |
| `fix(auth): handle token expiry properly` | Not a breaking change |
| `feat(api): add new endpoint for metrics` | Not a breaking change |

### Tools That Use `!`
- **semantic-release** → automatically bumps **major** version for breaking changes.
- **Commitlint** → validates proper use of `!` and `BREAKING CHANGE:` footer.
- **Changelog generators** → highlight breaking changes automatically.

---

## 5. Writing Effective Commit Messages

- Use **lowercase** for types and scopes.
- Keep the **summary under 72 characters**.
- Start the summary with a **verb** in the **present tense** (e.g., *add*, *fix*, *update*).
- Include a **detailed body** when necessary (what and why, not how).
- Reference **issue IDs** in the footer if applicable (e.g., `Closes #123`).

---

## 6. Tools for Enforcing Commit Standards

- **Commitlint** → Enforces Conventional Commits.
- **Husky** → Runs Git hooks before committing.
- **Commitizen** → Interactive CLI for consistent commit messages.

---

## 7. Benefits of Using Standard Commit Messages

- Easier collaboration and code reviews.
- Auto-generated changelogs and versioning.
- Better project history readability.
- Seamless integration with CI/CD pipelines.

---

### Example Commit Flow

```bash
git add .
git commit -m "feat(api): implement pagination for products"
git push origin main
```

---

### Quick Reference

- **Feature:** `feat:`
- **Fix:** `fix:`
- **Docs:** `docs:`
- **Style:** `style:`
- **Refactor:** `refactor:`
- **Performance:** `perf:`
- **Test:** `test:`
- **Build:** `build:`
- **CI:** `ci:`
- **Chore:** `chore:`
- **Revert:** `revert:`
- **Breaking Change:** `!` or `BREAKING CHANGE:`

