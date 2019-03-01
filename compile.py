#!/usr/bin/env python

import os
import sys
from subprocess import call
import time

date = time.strftime("%d.%m.%Y")
home = os.path.expanduser('~')
cwd = os.getcwd()

if __name__ == '__main__':
    print('Compiling home')
    webpage = ['paperify.py', 'index.md', 'web']
    call(webpage)

    print('Compiling posters')
    posters = ['paperify.py', 'posters/index.md', 'web']
    call(posters)

    print('Compiling papers')
    papers = ['paperify.py', 'papers/index.md', 'web']
    call(papers)

    print('Compiling presentations')
    presentations = ['paperify.py', 'presentations/index.md', 'web']
    call(presentations)

    print('Compiling projects')
    projects = ['paperify.py', 'projects/index.md', 'web']
    call(projects)

    print('Compiling resume')
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
