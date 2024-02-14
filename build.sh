#!/usr/bin/env bash
#
#       Ferit Yiğit BALABAN,        <fyb@fybx.dev>
#       scaffolding-build           2024

#       wip scaffolding component

# Section - static variables
commands=("sass" "realpath" "dirname" "realpath" "basename")

# Section - required functions
checkDependencies() {
    for cmd in "${commands[@]}"; do
        if ! command -v "$cmd" >/dev/null 2>&1; then
            echo "Error: $cmd command not found. Please install $cmd and try again."
            exit 1
        fi
    done
}

ensureLocation() {
    if [ "$SCRIPT_DIR" != "$CURRENT_DIR" ]; then
        echo "Warning: This script must be called from its original location."
        return 1
    fi
    return 0
}

# Section - pre-execution checks
checkDependencies

# Section - runtime variables
SCRIPT_DIR=$(realpath "$(dirname "$0")")
CURRENT_DIR=$(realpath "$(pwd)")

# Section - task requirement checks
if ! ensureLocation; then
    cd "$SCRIPT_DIR" || exit 1
fi

# Section - custom task definitions

# Section - task execution
sass --no-source-map --style=compressed scss:assets/css

# Section - continuous execution
if [ "$1" == "--continuous" ] || [ "$1" == "-c" ]; then
    sass --watch --no-source-map --style=compressed scss:assets/css
fi

# Section - custom task execution
