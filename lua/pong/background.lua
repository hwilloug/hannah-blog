Background = {}

function Background:load()
  self.img = love.graphics.newImage("assets/bg.png")
end

function Background:update(dt)

end

function Background:draw()
  love.graphics.draw(self.img, 0, 0)
end