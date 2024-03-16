"use client";
import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import ChatParticipants from "./ChatParticipants";
import ChatPlane from "./ChatPlane";
import ChatInput from "./ChatInput";
import ChatComposite from "./ChatComposite";

type ChatPopoverProps = {};

/**
 * Pretty basic but a starting point. This is the "Chat Plane" and
 * it will display the chat bubble messages. This has absolutely no
 * style or other characteristics right now. That effort is pending.
 *
 * @param messages
 * @constructor
 */
const ChatPopover: React.FC<ChatPopoverProps> = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Chat</Popover.Header>
      <Popover.Body>
        <ChatComposite />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Chat</Button>
    </OverlayTrigger>
  );
};

export default ChatPopover;

/**
 * import Button from 'react-bootstrap/Button';
 * import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
 * import Popover from 'react-bootstrap/Popover';
 *
 * const popover = (
 *   <Popover id="popover-basic">
 *     <Popover.Header as="h3">Popover right</Popover.Header>
 *     <Popover.Body>
 *       And here's some <strong>amazing</strong> content. It's very engaging.
 *       right?
 *     </Popover.Body>
 *   </Popover>
 * );
 *
 * const Example = () => (
 *   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
 *     <Button variant="success">Click me to see</Button>
 *   </OverlayTrigger>
 * );
 */
