#!/usr/bin/env bash
set -euo pipefail

# Only enforce in Vercel build environments.
if [[ "${VERCEL:-}" != "1" ]]; then
  echo "[verify-vercel-target] Local/non-Vercel build detected; skipping target verification."
  exit 0
fi

EXPECTED_PROJECT="farallon-website"
EXPECTED_SCOPE="will-hs-projects"
EXPECTED_PRODUCTION_BRANCH="main"
EXPECTED_PRODUCTION_URLS=(
  "farallonai.com"
  "www.farallonai.com"
  "farallon-website.vercel.app"
  "farallon-website-will-hs-projects.vercel.app"
)

PROJECT_NAME="${VERCEL_PROJECT_NAME:-}"
PRODUCTION_URL="${VERCEL_PROJECT_PRODUCTION_URL:-}"
VERCEL_ENV_NAME="${VERCEL_ENV:-}"
COMMIT_REF="${VERCEL_GIT_COMMIT_REF:-}"

if [[ -n "$PROJECT_NAME" && "$PROJECT_NAME" != "$EXPECTED_PROJECT" ]]; then
  echo "[verify-vercel-target] ERROR: Wrong Vercel project name."
  echo "  expected: $EXPECTED_PROJECT"
  echo "  got:      $PROJECT_NAME"
  echo "  expected scope/team: $EXPECTED_SCOPE"
  exit 1
fi

if [[ -n "$PRODUCTION_URL" ]]; then
  ok="false"
  for allowed in "${EXPECTED_PRODUCTION_URLS[@]}"; do
    if [[ "$PRODUCTION_URL" == "$allowed" ]]; then
      ok="true"
      break
    fi
  done

  if [[ "$ok" != "true" ]]; then
    echo "[verify-vercel-target] ERROR: Unexpected production URL for this project context."
    echo "  expected one of: ${EXPECTED_PRODUCTION_URLS[*]}"
    echo "  got:             $PRODUCTION_URL"
    echo "  expected scope:  $EXPECTED_SCOPE"
    exit 1
  fi
fi

# Hard-stop accidental production deploys from feature branches.
if [[ "$VERCEL_ENV_NAME" == "production" && -n "$COMMIT_REF" && "$COMMIT_REF" != "$EXPECTED_PRODUCTION_BRANCH" ]]; then
  echo "[verify-vercel-target] ERROR: Production deploy attempted from non-production branch."
  echo "  expected branch: $EXPECTED_PRODUCTION_BRANCH"
  echo "  got branch:      $COMMIT_REF"
  echo "  action: merge/promote to main before expecting farallonai.com to update."
  exit 1
fi

echo "[verify-vercel-target] OK: Deployment context matches expected Vercel target (${EXPECTED_SCOPE}/${EXPECTED_PROJECT})."
