#!/usr/bin/env python3

import os
import sys
import time
import datetime
from subprocess import call

date = time.strftime("%d.%m.%Y")
home = os.path.expanduser('~')
cwd = os.getcwd()

if __name__ == '__main__':
    today = datetime.datetime.today().strftime('%B %d, %Y')
    index_content = '''% Posts\n% Seb Arnold\n% ''' + today + \
                    '''\n\n> A maximum of three paragraphs a week.\n\n\n'''
#    index_content += '''<br /><br /><br />\n'''
    index_content += '''## Table of Contents\n\n'''

    for subdir, folders, files in os.walk('./'):
        if not subdir == './':
            continue
        folders = sorted(folders, key=lambda x: x[-8:])
        for folder in folders:
            possible_names = ['note.md', 'index.md', 'post.md']
            post_path = None
            for name in possible_names:
                name = os.path.join(folder, name)
                if os.path.exists(name):
                    post_path = name
            if post_path is None:
                print('Post not found, skipped', folder)
                continue

            with open(post_path, 'r') as post:
                title, author, date = post.readlines()[:3]
                title = title.replace('%', '').strip()
                author = author.replace('%', '').strip()
                date = date.replace('%', '').strip()
                compile_path = post_path[:-3] + '.html'
                index_content += '* [' + title + '](' + compile_path + ')'
                index_content += '&nbsp; <small>*' + date + '*</small>'
                index_content += '\n\n'

                print('Compiling', post_path)
                post_cmd = ['paperify.py', post_path, 'web']
                call(post_cmd)

    open('index.md', 'w').write(index_content)
    print('Compiling index')
    index = ['paperify.py', 'index.md', 'web']
    call(index)
