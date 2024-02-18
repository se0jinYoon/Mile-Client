import styled from '@emotion/styled';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import {
  useEditor,
  useCurrentEditor,
  EditorProvider,
  EditorContent,
  Editor,
  BubbleMenu,
} from '@tiptap/react';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

// custom
import { FontSize } from '../utils/fontSize';
import './tiptap.css';

const TipTap = () => {
  const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `;

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TextStyle,
      FontSize.configure({ types: ['textStyle'] }),
      Color,
      Highlight.configure({ multicolor: true }),
      Bold,
      Underline,
      Strike,
      Italic,
      TextAlign.configure({
        types: ['paragraph'],
        alignments: ['center', 'left'],
        defaultAlignment: 'left',
      }),
      ListItem,
      BulletList,
      OrderedList,
      Blockquote,
      HorizontalRule,
    ],
    content,
  }) as Editor;

  // 글자 크기 함수
  const toggleFontSizeContent2 = useCallback(() => {
    editor.chain().focus().setFontSize('1.2rem').run();
  }, [editor]);
  const toggleFontSizeContent1 = useCallback(() => {
    editor.chain().focus().setFontSize('1.6rem').run();
  }, [editor]);
  const toggleFontSizeTitle2 = useCallback(() => {
    editor.chain().focus().setFontSize('1.8rem').run();
  }, [editor]);
  const toggleFontSizeTitle1 = useCallback(() => {
    editor.chain().focus().setFontSize('2.6rem').run();
  }, [editor]);

  // 글자 색상 함수
  const toggleTextBlack = useCallback(() => {
    editor.chain().focus().setColor('#010101').run();
  }, [editor]);
  const toggleTextGray = useCallback(() => {
    editor.chain().focus().setColor('#505050').run();
  }, [editor]);
  const toggleTextRed = useCallback(() => {
    editor.chain().focus().setColor('#B81616').run();
  }, [editor]);
  const toggleTextOrange = useCallback(() => {
    editor.chain().focus().setColor('#DA5B24').run();
  }, [editor]);
  const toggleTextYellow = useCallback(() => {
    editor.chain().focus().setColor('#C5B525').run();
  }, [editor]);
  const toggleTextGreen = useCallback(() => {
    editor.chain().focus().setColor('#2F7417').run();
  }, [editor]);
  const toggleTextBlue = useCallback(() => {
    editor.chain().focus().setColor('#172B74').run();
  }, [editor]);
  const toggleTextViolet = useCallback(() => {
    editor.chain().focus().setColor('#6139D1').run();
  }, [editor]);
  const toggleTextPink = useCallback(() => {
    editor.chain().focus().setColor('#951479').run();
  }, [editor]);

  // 글자 배경색 함수
  const toggleHighLightWhite = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#FFFFFF' }).run();
  }, [editor]);
  const toggleHighLightGray = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#EAEAEA' }).run();
  }, [editor]);
  const toggleHighLightRed = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E2E2' }).run();
  }, [editor]);
  const toggleHighLightOrange = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E7E2' }).run();
  }, [editor]);
  const toggleHighLightYellow = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6F4E2' }).run();
  }, [editor]);
  const toggleHighLightGreen = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F1F6E2' }).run();
  }, [editor]);
  const toggleHighLightBlue = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#E2EAF6' }).run();
  }, [editor]);
  const toggleHighLightViolet = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#E9E3F8' }).run();
  }, [editor]);
  const toggleHighLightPink = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E2F3' }).run();
  }, [editor]);

  // bold 함수
  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  // 밑줄 함수
  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  // 취소선 함수
  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  // 기울기 함수
  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  // 왼쪽 정렬 함수
  const toggleAlignLeft = useCallback(() => {
    editor.chain().focus().setTextAlign('left').run();
  }, [editor]);

  // 가운데 정렬 함수
  const toggleAlignCenter = useCallback(() => {
    editor.chain().focus().setTextAlign('center').run();
  }, [editor]);

  // Bullet 리스트 함수
  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  // Ordered 리스트 함수
  const toggleOrderedList = useCallback(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);

  // 인용구 함수
  const toggleBlockQuote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  // 구분선 함수
  const toggleHorizontalRule = useCallback(() => {
    editor.chain().focus().setHorizontalRule().run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <ToolbarWrapper className="menu">
        {/* 글자 크기 */}
        <button
          className={editor.isActive('textStyle', { fontSize: '1.2rem' }) ? 'is-active' : ''}
          onClick={toggleFontSizeContent2}
        >
          본문2
        </button>
        <button
          className={editor.isActive('textStyle', { fontSize: '1.6rem' }) ? 'is-active' : ''}
          onClick={toggleFontSizeContent1}
        >
          본문1
        </button>
        <button
          className={editor.isActive('textStyle', { fontSize: '1.8rem' }) ? 'is-active' : ''}
          onClick={toggleFontSizeTitle2}
        >
          제목2
        </button>
        <button
          className={editor.isActive('textStyle', { fontSize: '2.6rem' }) ? 'is-active' : ''}
          onClick={toggleFontSizeTitle1}
        >
          제목1
        </button>

        {/* 글자색 */}
        <button
          className={editor.isActive('textStyle', { color: '#010101' }) ? 'is-active' : ''}
          onClick={toggleTextBlack}
          data-testid="setBlack"
        >
          black
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#505050' }) ? 'is-active' : ''}
          onClick={toggleTextGray}
          data-testid="setGray"
        >
          gray
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#B81616' }) ? 'is-active' : ''}
          onClick={toggleTextRed}
          data-testid="setRed"
        >
          red
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#DA5B24' }) ? 'is-active' : ''}
          onClick={toggleTextOrange}
          data-testid="setOrange"
        >
          orange
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#C5B525' }) ? 'is-active' : ''}
          onClick={toggleTextYellow}
          data-testid="setYellow"
        >
          yellow
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#2F7417' }) ? 'is-active' : ''}
          onClick={toggleTextGreen}
          data-testid="setGreen"
        >
          green
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#172B74' }) ? 'is-active' : ''}
          onClick={toggleTextBlue}
          data-testid="setBlue"
        >
          blue
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#6139D1' }) ? 'is-active' : ''}
          onClick={toggleTextViolet}
          data-testid="setViolet"
        >
          violet
        </button>
        <button
          className={editor.isActive('textStyle', { color: '#951479' }) ? 'is-active' : ''}
          onClick={toggleTextPink}
          data-testid="setPink"
        >
          pink
        </button>

        {/* 글자 배경색 */}
        <button
          className={editor.isActive('highlight', { color: '#FFFFFF' }) ? 'is-active' : ''}
          onClick={toggleHighLightWhite}
        >
          white
        </button>
        <button
          className={editor.isActive('highlight', { color: '#EAEAEA' }) ? 'is-active' : ''}
          onClick={toggleHighLightGray}
        >
          gray
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E2E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightRed}
        >
          red
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E7E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightOrange}
        >
          orange
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6F4E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightYellow}
        >
          yellow
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F1F6E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightGreen}
        >
          green
        </button>
        <button
          className={editor.isActive('highlight', { color: '#E2EAF6' }) ? 'is-active' : ''}
          onClick={toggleHighLightBlue}
        >
          blue
        </button>
        <button
          className={editor.isActive('highlight', { color: '#E9E3F8' }) ? 'is-active' : ''}
          onClick={toggleHighLightViolet}
        >
          violet
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E2F3' }) ? 'is-active' : ''}
          onClick={toggleHighLightPink}
        >
          pink
        </button>

        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('bold'),
          })}
          onClick={toggleBold}
        >
          bold
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('underline'),
          })}
          onClick={toggleUnderline}
        >
          underline
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('strike'),
          })}
          onClick={toggleStrike}
        >
          strike
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('italic'),
          })}
          onClick={toggleItalic}
        >
          italic
        </button>

        {/* 정렬 */}
        <button
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          onClick={toggleAlignLeft}
        >
          left
        </button>
        <button
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          onClick={toggleAlignCenter}
        >
          center
        </button>

        {/* 리스트 */}
        <button
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          onClick={toggleBulletList}
        >
          bulletList
        </button>
        <button
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          onClick={toggleOrderedList}
        >
          orderedList
        </button>

        {/* 인용구 */}
        <button
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          onClick={toggleBlockQuote}
        >
          blockquote
        </button>

        {/* 구분선 */}
        <button onClick={toggleHorizontalRule}>구분선</button>
      </ToolbarWrapper>
      <div className="editorWrapper">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default TipTap;

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 53.3rem;
  height: 3.6rem;
  margin: 0;
  padding: 0;

  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 0.8rem;

  .is-active {
    color: pink;
  }
`;