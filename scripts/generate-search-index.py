#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate-search-index.py
扫描站点全部 HTML 页面，生成 js/search-index.js 供 js/search.js 全站搜索使用。
用法：python scripts/generate-search-index.py （在站点根目录执行）
每次新增/修改文章后需重新运行，或由自动化流程调用。
"""
import io
import os
import re
import json
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TAG_MAP = {
    'index.html': '首页',
    'tools.html': '工具',
    'methods.html': '变现',
    'cases.html': '案例',
    'beginner.html': '入门',
    'privacy-policy.html': '合规',
    'affiliate-disclosure.html': '合规',
}


def strip_tags(html):
    html = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.S | re.I)
    html = re.sub(r'<style[^>]*>.*?</style>', ' ', html, flags=re.S | re.I)
    html = re.sub(r'<[^>]+>', ' ', html)
    html = html.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
    html = re.sub(r'\s+', ' ', html)
    return html.strip()


def extract_headings(html):
    heads = []
    for m in re.finditer(r'<h[1-4][^>]*>(.*?)</h[1-4]>', html, flags=re.S | re.I):
        t = strip_tags(m.group(1))
        if t and len(t) < 100:
            heads.append(t)
    return ' '.join(heads)


def extract_meta(html, name):
    m = re.search(r'<meta\s+name="%s"\s+content="([^"]*)"' % name, html, flags=re.I)
    if not m:
        m = re.search(r'<meta\s+content="([^"]*)"\s+name="%s"' % name, html, flags=re.I)
    return m.group(1).strip() if m else ''


def extract_title(html):
    m = re.search(r'<title>(.*?)</title>', html, flags=re.S | re.I)
    t = strip_tags(m.group(1)) if m else ''
    # 去掉站点后缀
    return re.sub(r'\s*\|\s*AI副业指南\s*$', '', t).strip()


def build():
    entries = []
    # 根目录页面
    for f in sorted(os.listdir(ROOT)):
        if not f.endswith('.html'):
            continue
        html = io.open(os.path.join(ROOT, f), encoding='utf-8').read()
        if f not in TAG_MAP:
            continue
        body = strip_tags(re.search(r'<body.*?</body>', html, flags=re.S | re.I).group(0)) if re.search(r'<body.*?</body>', html, flags=re.S | re.I) else ''
        entries.append({
            'cat': 'root',
            'u': f,
            'tag': TAG_MAP[f],
            't': extract_title(html),
            'd': extract_meta(html, 'description')[:160],
            'k': (extract_meta(html, 'keywords') + ' ' + extract_headings(html))[:800],
            'b': body[:2500],
        })

    # 文章页面
    adir = os.path.join(ROOT, 'articles')
    for f in sorted(os.listdir(adir)):
        if not f.endswith('.html'):
            continue
        html = io.open(os.path.join(adir, f), encoding='utf-8').read()
        m = re.search(r'<span class="article-tag">([^<]+)</span>', html)
        tag = m.group(1).strip() if m else '文章'
        body_match = re.search(r'<body.*?</body>', html, flags=re.S | re.I)
        body = strip_tags(body_match.group(0)) if body_match else ''
        entries.append({
            'cat': 'art',
            'u': 'articles/' + f,
            'tag': tag,
            't': extract_title(html),
            'd': extract_meta(html, 'description')[:160],
            'k': (extract_meta(html, 'keywords') + ' ' + extract_headings(html))[:800],
            'b': body[:2500],
        })

    out = ('/* 自动生成的全站搜索索引 — 由 scripts/generate-search-index.py 生成，请勿手编辑\n'
           '   生成时间: %s | 页面数: %d */\nwindow.SEARCH_INDEX = %s;\n'
           % (datetime.now().strftime('%Y-%m-%d %H:%M'), len(entries),
              json.dumps(entries, ensure_ascii=False, separators=(',', ':'))))
    io.open(os.path.join(ROOT, 'js', 'search-index.js'), 'w', encoding='utf-8', newline='\n').write(out)
    print('Indexed %d pages -> js/search-index.js (%.1f KB)' % (len(entries), len(out) / 1024))


if __name__ == '__main__':
    build()
