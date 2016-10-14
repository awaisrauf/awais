#!/usr/bin/env python

import os
import sys
from subprocess import call

if __name__ == '__main__':
    call(['paperify.py', 'index.md', 'web'])
