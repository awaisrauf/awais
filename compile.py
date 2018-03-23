#!/usr/bin/env python

import os
import sys
from subprocess import call
import time

date = time.strftime("%d.%m.%Y")
home = os.path.expanduser('~')
cwd = os.getcwd()

if __name__ == '__main__':
    webpage = ['paperify.py', 'index.md', 'web']
    call(webpage)

    resume = ['pandoc',
              cwd + '/resume.md',
              '-s',
              '-o',
              # 'resume_' + str(date) + '.pdf',
              'resume.pdf',
              '--template',
              cwd + '/resume.tex',
            ]
    call(resume)
